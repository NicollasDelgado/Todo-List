import React, { useState, useEffect } from "react";
import { 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  FlatList,
  Alert, 
  Image, 
  Keyboard, 
  TouchableWithoutFeedback,
  SafeAreaView
} from "react-native";
import { styles } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ClipboardIcon from "./ClipboardIcon";

interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
}

export default function Home() {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [filter, setFilter] = useState<'created' | 'completed'>('created');

  // Lógica do filtro corrigida
  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.isCompleted; // Só as concluídas
    return true; // Todas as tarefas quando filtro é 'created'
  });

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

  async function removeAllTasks() {
    setTasks([]);
    await AsyncStorage.setItem("@tasks", JSON.stringify([]));
  }

  async function removeCompletedTasks() {
    const updatedTasks = tasks.filter(task => !task.isCompleted);
    setTasks(updatedTasks);
    await AsyncStorage.setItem("@tasks", JSON.stringify(updatedTasks));
  }

  const createdTasksCount = tasks.length;
  const completedTasksCount = tasks.filter((task: Task) => task.isCompleted).length;

  return (
    <SafeAreaView style={styles.safeContainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          {/* Seção superior com cor #0D0D0D */}
          <View style={styles.topSection}>
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

            <View style={styles.inputContainer}>
              <TextInput
                style={[
                  styles.input,
                  { borderColor: isFocused ? "#5E60CE" : "#262626" }
                ]}
                placeholder="Adicione uma nova tarefa"
                placeholderTextColor="#808080"
                value={task}
                onChangeText={setTask}
                onSubmitEditing={handleTaskAdd}
                returnKeyType="done"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />

              <TouchableOpacity
                style={styles.addButton}
                onPress={handleTaskAdd}
                activeOpacity={0.7}
              >
                <View style={styles.addButtonCircle}>
                  <Text style={styles.addButtonText}>+</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* Seção inferior com cor #1A1A1A */}
          <View style={styles.bottomSection}>
            <View style={styles.countersContainer}>
              <TouchableOpacity onPress={() => setFilter('created')}>
                <View style={styles.counterItem}>
                  <Text style={styles.createdText}>Criadas</Text>
                  <View style={styles.counterBadge}>
                    <Text style={styles.counterText}>{createdTasksCount}</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setFilter('completed')}>
                <View style={styles.counterItem}>
                  <Text style={styles.completedText}>Concluídas</Text>
                  <View style={styles.counterBadge}>
                    <Text style={styles.counterText}>{completedTasksCount}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.tasksContainer}>
              {tasks.length === 0 ? (
                <View style={styles.emptyState}>
                  <ClipboardIcon size={56} color="#808080" />
                  <Text style={styles.emptyTitle}>Você ainda não tem tarefas cadastradas</Text>
                  <Text style={styles.emptySubtitle}>Crie tarefas e organize seus itens a fazer</Text>
                </View>
              ) : (
                <FlatList
                  data={filteredTasks}
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
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}