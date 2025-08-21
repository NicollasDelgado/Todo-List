import React, { useState, useEffect } from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList, 
        Alert, Image } from "react-native";
import { styles } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from 'expo-linear-gradient';
import ClipboardIcon from "./ClipboardIcon";

interface Task {
    id: string;
    title: string;
    isCompleted: boolean;
}

export default function Home() {
    const [task, setTask] = useState<string>('');
    const [tasks, setTasks] = useState<Task[]>([]);
    const [isFocused, setIsFocused] = useState(false); // <-- controle de foco

    useEffect(() => {
        async function loadTasks() {
            try {
                const stored = await AsyncStorage.getItem("@tasks");
                if (stored) {
                    setTasks(JSON.parse(stored));
                } else {
                    setTasks([]);
                }
            } catch (error) {
                console.log('Erro ao carregar tarefas:', error);
                setTasks([]);
            }
        }
        loadTasks();
    }, []);

    async function handleTaskAdd() {
        if (task.trim()) {
            try {
                const newTask: Task = {
                    id: Date.now().toString(),
                    title: task.trim(),
                    isCompleted: false,
                };
                const newTasks = [...tasks, newTask];
                setTasks(newTasks);
                setTask('');
                await AsyncStorage.setItem("@tasks", JSON.stringify(newTasks));
            } catch (error) {
                console.log('Erro ao adicionar tarefa:', error);
            }
        }
    }

    async function handleTaskToggle(taskId: string) {
        try {
            const updatedTasks = tasks.map((task: Task) => 
                task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
            );
            setTasks(updatedTasks);
            await AsyncStorage.setItem("@tasks", JSON.stringify(updatedTasks));
        } catch (error) {
            console.log('Erro ao atualizar tarefa:', error);
        }
    }

    async function handleTaskDelete(taskId: string) {
        Alert.alert(
            "Remover tarefa",
            "Tem certeza que você deseja remover esta tarefa?",
            [
                { text: "Cancelar", style: "cancel" },
                { 
                    text: "Sim", 
                    style: "destructive",
                    onPress: async () => {
                        try {
                            const updatedTasks = tasks.filter((task: Task) => task.id !== taskId);
                            setTasks(updatedTasks);
                            await AsyncStorage.setItem("@tasks", JSON.stringify(updatedTasks));
                        } catch (error) {
                            console.log('Erro ao deletar tarefa:', error);
                        }
                    }
                }
            ]
        );
    }

    const createdTasksCount = tasks.length;
    const completedTasksCount = tasks.filter((task: Task) => task.isCompleted).length;
    
    return (
        <LinearGradient
            colors={['#121222', '#46474ba9']}
            style={styles.container}
        >
            {/* Header com logo e título */}
            <View style={styles.titleContainer}>
                <Image 
                    style={styles.logo}
                    source={require('../../../assets/icon.png')}
                    resizeMode="contain"
                />
                <View style={styles.textContainer}>
                    <Text style={styles.to}>to</Text>
                    <Text style={styles.do}>do</Text>
                </View>
            </View>

            {/* Input para adicionar tarefa */}
            <View style={styles.inputContainer}>
               <TextInput
                    style={[
                        styles.input,
                        { borderColor: isFocused ? "#5E60CE" : "#0D0D0D" } // borda dinâmica
                    ]}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#808080"
                    value={task}
                    onChangeText={setTask}
                    onSubmitEditing={handleTaskAdd}
                    returnKeyType="done"
                    onFocus={() => setIsFocused(true)}   // quando foca
                    onBlur={() => setIsFocused(false)}   // quando desfoca
                />

                <TouchableOpacity 
                    style={styles.addButton} 
                    onPress={handleTaskAdd}
                    activeOpacity={0.7}
                >
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>

            {/* Contadores */}
            <View style={styles.countersContainer}>
                <View style={styles.counterItem}>
                    <Text style={styles.createdText}>Criadas</Text>
                    <View style={styles.counterBadge}>
                        <Text style={styles.counterText}>{createdTasksCount}</Text>
                    </View>
                </View>
                
                <View style={styles.counterItem}>
                    <Text style={styles.completedText}>Concluídas</Text>
                    <View style={styles.counterBadge}>
                        <Text style={styles.counterText}>{completedTasksCount}</Text>
                    </View>
                </View>
            </View>

            {/* Lista de tarefas ou estado vazio */}
            <View style={styles.tasksContainer}>
                {tasks.length === 0 ? (
                    <View style={styles.emptyState}>
                        <ClipboardIcon size={56} color="#808080" />
                        <Text style={styles.emptyTitle}>Você ainda não tem tarefas cadastradas</Text>
                        <Text style={styles.emptySubtitle}>Crie tarefas e organize seus itens a fazer</Text>
                    </View>
                ) : (
                    <FlatList
                        data={tasks}
                        keyExtractor={(item: Task) => item.id}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }: { item: Task }) => (
                            <View style={styles.taskItem}>
                                <TouchableOpacity 
                                    style={[
                                        styles.checkButton,
                                        item.isCompleted && styles.checkButtonCompleted
                                    ]}
                                    onPress={() => handleTaskToggle(item.id)}
                                    activeOpacity={0.7}
                                >
                                    {item.isCompleted && (
                                        <Text style={styles.checkIcon}>✓</Text>
                                    )}
                                </TouchableOpacity>
                                
                                <Text style={[
                                    styles.taskText,
                                    item.isCompleted && styles.taskTextCompleted
                                ]}>
                                    {item.title}
                                </Text>
                                
                                <TouchableOpacity 
                                    style={styles.deleteButton}
                                    onPress={() => handleTaskDelete(item.id)}
                                    activeOpacity={0.7}
                                >
                                    <Text style={styles.deleteIcon}>🗑️</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                )}
            </View>
        </LinearGradient>
    )
}
