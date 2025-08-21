import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  
  // Container que vai conter tanto a logo quanto o título
  titleContainer: {
    flexDirection: 'row',
    marginTop: 70,
    marginBottom: 32,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    fontFamily: 'Inter',
  },
  
  // Estilo da logo
  logo: {
    marginTop: 20,
    width: 70,
    height: 80,
    resizeMode: "contain",
    marginRight: 0,
  },
  
  // Container para o texto "todo"
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  to: {
    color: '#4EA8DE', // azul mais próximo ao design
    fontSize: 40,
    fontWeight: 'bold',
    includeFontPadding: false,
    fontFamily: 'Inter',
  },
  
  do: {
    color: '#5E60CE', // roxo mais próximo ao design
    fontSize: 40,
    fontWeight: 'bold',
    includeFontPadding: false,
    fontFamily: 'Inter',
  },

  // Estilos do input
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 32,
    paddingHorizontal: 0,
  },

  input: {
    flex: 1,
    backgroundColor: '#262626',
    borderRadius: 6,
    padding: 16,
    color: '#F2F2F2',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#0D0D0D',
    marginRight: 4,
    fontFamily: 'Inter',
  },

  addButton: {
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 4,
  },

  addButtonText: {
    color: '#F2F2F2',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // Estilos dos contadores
  countersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#333333',
  },

  counterItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  createdText: {
    color: '#4EA8DE',
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 8,
  },

  completedText: {
    color: '#8284FA',
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 8,
  },

  counterBadge: {
    backgroundColor: '#333333',
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
    minWidth: 25,
    alignItems: 'center',
  },

  counterText: {
    color: '#D9D9D9',
    fontSize: 12,
    fontWeight: 'bold',
  },

  // Container das tarefas
  tasksContainer: {
    flex: 1,
  },

  // Estilos dos itens de tarefa
  taskItem: {
    backgroundColor: '#262626',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333333',
    minHeight: 64,
  },

  checkButton: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#4EA8DE',
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkButtonCompleted: {
    backgroundColor: '#5E60CE',
    borderColor: '#5E60CE',
  },

  checkIcon: {
    color: '#F2F2F2',
    fontSize: 10,
    fontWeight: 'bold',
  },

  taskText: {
    flex: 1,
    color: '#F2F2F2',
    fontSize: 14,
    lineHeight: 19,
  },

  taskTextCompleted: {
    color: '#808080',
    textDecorationLine: 'line-through',
  },

  deleteButton: {
    padding: 8,
    marginLeft: 8,
  },

  deleteIcon: {
    fontSize: 14,
  },

  // Estado vazio
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 48,
    paddingBottom: 48,
  },

  emptyIcon: {
    fontSize: 56,
    marginBottom: 16,
    opacity: 0.3,
  },

  emptyTitle: {
    color: '#808080',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
  },

  emptySubtitle: {
    color: '#808080',
    fontSize: 14,
    textAlign: 'center',
  },
});