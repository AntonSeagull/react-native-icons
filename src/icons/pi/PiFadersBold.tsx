

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiFadersBold = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M140,124v92a12,12,0,0,1-24,0V124a12,12,0,0,1,24,0Zm60,68a12,12,0,0,0-12,12v12a12,12,0,0,0,24,0V204A12,12,0,0,0,200,192Zm24-40H212V40a12,12,0,0,0-24,0V152H176a12,12,0,0,0,0,24h48a12,12,0,0,0,0-24ZM56,160a12,12,0,0,0-12,12v44a12,12,0,0,0,24,0V172A12,12,0,0,0,56,160Zm24-40H68V40a12,12,0,0,0-24,0v80H32a12,12,0,0,0,0,24H80a12,12,0,0,0,0-24Zm72-48H140V40a12,12,0,0,0-24,0V72H104a12,12,0,0,0,0,24h48a12,12,0,0,0,0-24Z" />
        </G>
      </Svg>
    );
  }

