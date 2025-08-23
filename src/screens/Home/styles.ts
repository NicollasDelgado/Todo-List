import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#1A1A1A', // Cor de fundo para toda a tela incluindo áreas do sistema
  },
  
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },

  // Seção superior - cor #0D0D0D sólida (sem degradê)
  topSection: {
    backgroundColor: '#0D0D0D',
    paddingHorizontal: 24,
    // To make the background line appear at the middle of the input,
    // the top section's height should be just the title content's height: 162px.
    height: 192,
  },

  // Seção inferior - cor #1A1A1A (da metade do input para baixo)
  bottomSection: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    paddingHorizontal: 24,
    // This padding accounts for the bottom half of the input
    paddingTop: 25, // Half of the input's height (50 / 2)
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
    // Pulls the input up by half its height to overlap the section boundary
    marginTop: -25, // Half of the input's height (50 / 2)
    paddingHorizontal: 0, // Keep horizontal padding consistent with sections
    zIndex: 1, // Ensure input is rendered above the background sections
  },

  input: {
    flex: 1,
    backgroundColor: '#262626',
    borderRadius: 6,
    padding: 16,
    paddingLeft: 16,
    color: '#F2F2F2',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#262626', // cor padrão quando não está em foco (mesma cor do fundo)
    // Removed marginRight to increase width
    fontFamily: 'Inter',
    height: 50, // Explicitly set height based on padding, font size, and border
    marginRight: 7,
    marginLeft: 0,
    marginTop: 28,
  },

  addButton: {
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 28,
    // Removed marginLeft to increase input width
  },

  // Círculo em volta do símbolo + (apenas bordas)
  addButtonCircle: {
    backgroundColor: 'transparent', // Transparente para não preencher
    borderWidth: 2, // Espessura da borda
    borderColor: '#F2F2F2', // Cor da borda (branca)
    borderRadius: 15, // Faz o círculo perfeito
    width: 23,
    height: 23,
    alignItems: 'center',
    justifyContent: 'center',
  },

  addButtonText: {
    color: '#F2F2F2',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    includeFontPadding: false,
    marginLeft: 1,
    marginTop: -2,
  },

  // Estilos dos contadores
  countersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopColor: '#262626', // linha divisória entre input e contadores
    marginTop: 15, // Added margin to separate from the input
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
    backgroundColor: '#262626', // ajustado para contrastar com o fundo #333333
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
    backgroundColor: '#333333',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#404040', // ajustado para contrastar com o fundo #333333
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

  // Estado vazio - prancheta agora aparece embaixo dos contadores (MANTIDO IGUAL)
  emptyState: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  emptyTitle: {
    color: '#808080',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
    marginTop: 16,
  },

  emptySubtitle: {
    color: '#808080',
    fontSize: 15,
    textAlign: 'center',
  },
});