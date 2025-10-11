

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiMapPinPlusLight = (props: IconProps) => {

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
          <Path  d="M166,104a6,6,0,0,1-6,6H134v26a6,6,0,0,1-12,0V110H96a6,6,0,0,1,0-12h26V72a6,6,0,0,1,12,0V98h26A6,6,0,0,1,166,104Zm48,0c0,30.91-14.34,63.74-41.47,94.94a252.32,252.32,0,0,1-41.09,38,6,6,0,0,1-6.88,0,252.32,252.32,0,0,1-41.09-38C56.34,167.74,42,134.91,42,104a86,86,0,0,1,172,0Zm-12,0a74,74,0,0,0-148,0c0,59.62,59,108.93,74,120.51C143,212.93,202,163.62,202,104Z" />
        </G>
      </Svg>
    );
  }

