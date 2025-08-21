import React from 'react';
import { View } from 'react-native';

interface ClipboardIconProps {
  size?: number;
  color?: string;
}

const ClipboardIcon: React.FC<ClipboardIconProps> = ({ size = 56, color = '#808080' }) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.3,
      }}
    >
      {/* Corpo principal do clipboard - formato mais arredondado */}
      <View
        style={{
          width: size * 0.75,
          height: size * 0.9,
          borderWidth: 3,
          borderColor: color,
          borderRadius: 12,
          backgroundColor: 'transparent',
          position: 'relative',
        }}
      >
        {/* Clip superior - mais largo e arredondado */}
        <View
          style={{
            position: 'absolute',
            top: -8,
            left: '25%',
            width: '50%',
            height: 16,
            backgroundColor: color,
            borderRadius: 8,
            opacity: 0.8,
          }}
        />
        
        {/* Linhas de texto com espaçamento igual à imagem */}
        <View style={{ 
          paddingHorizontal: size * 0.12, 
          paddingTop: size * 0.25,
          flex: 1,
          justifyContent: 'flex-start'
        }}>
          {/* Primeira linha - mais larga */}
          <View
            style={{
              height: 3,
              backgroundColor: color,
              marginBottom: size * 0.12,
              width: '85%',
              borderRadius: 1.5,
            }}
          />
          
          {/* Segunda linha - mesma largura */}
          <View
            style={{
              height: 3,
              backgroundColor: color,
              marginBottom: size * 0.12,
              width: '85%',
              borderRadius: 1.5,
            }}
          />
          
          {/* Terceira linha - mais curta */}
          <View
            style={{
              height: 3,
              backgroundColor: color,
              width: '45%',
              borderRadius: 1.5,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default ClipboardIcon;