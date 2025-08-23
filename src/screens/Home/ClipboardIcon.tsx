import React from 'react';
import { View } from 'react-native';

interface ClipboardIconProps {
  size?: number;
  color?: string;
  showLine?: boolean; // prop para controlar a linha verde
}

const ClipboardIcon: React.FC<ClipboardIconProps> = ({
  size = 56,
  color = '#808080',
  showLine = true,
}) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.3, // opacidade do container principal
      }}
    >
      {showLine && (
        <View
          style={{
            position: 'absolute',
            top: 1,
            left: 2,
            right: '13%',
            height: 4,
            backgroundColor: '#262626',
            borderRadius: 1.5,
            width: size * 0.85 - 6,
          }}
        />
      )}

      {/* Corpo principal do clipboard */}
      <View
        style={{
          width: size * 0.85,
          height: size * 1.0,
          borderWidth: 3,
          borderColor: color,
          borderRadius: 14,
          backgroundColor: 'transparent',
          position: 'relative',
          overflow: 'hidden', // impede que linhas saiam do retângulo
        }}
      >
        {/* brecha TopLeft */}
        <View
          style={{
            position: 'absolute',
            top: -3,       // cobre a borda superior
            left: -3,      // cobre a borda esquerda
            width: 20,     // largura da brecha
            height: 20,    // altura da brecha
            backgroundColor: 'white', // cor do fundo do container
            zIndex: 10,    // fica acima da borda
          }}
        />

        {/* Clipe superior */}
        <View
          style={{
            position: 'absolute',
            top: -6,
            left: '13%',
            width: 30,
            height: 10,
            backgroundColor: '#262626',
            borderWidth: 2,
            borderColor: '#808080',
            borderRadius: 6,
            opacity: 1,
            zIndex: 2,
          }}
        />

        {/* Linhas de texto dentro do clipboard */}
        <View
          style={{
            paddingHorizontal: size * 0.15,
            paddingTop: size * 0.25,
            flex: 1,
            justifyContent: 'flex-start',
          }}
        >
          <View
            style={{
              height: 3,
              backgroundColor: color,
              marginBottom: size * 0.1,
              width: '80%',
              borderRadius: 1.5,
            }}
          />
          <View
            style={{
              height: 3,
              backgroundColor: color,
              marginBottom: size * 0.1,
              width: '80%',
              borderRadius: 1.5,
            }}
          />
          <View
            style={{
              height: 3,
              backgroundColor: color,
              width: '50%',
              borderRadius: 1.5,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default ClipboardIcon;
