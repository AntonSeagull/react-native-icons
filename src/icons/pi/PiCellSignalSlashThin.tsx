

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCellSignalSlashThin = (props: IconProps) => {

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
          <Path  d="M84,152v48a4,4,0,0,1-8,0V152a4,4,0,0,1,8,0ZM40,188a4,4,0,0,0-4,4v8a4,4,0,0,0,8,0v-8A4,4,0,0,0,40,188Zm171,25.31L51,37.31A4,4,0,0,0,45,42.69l71,78.06V200a4,4,0,0,0,8,0V129.55l32,35.2V200a4,4,0,0,0,8,0V173.55l41,45.14a4,4,0,1,0,5.92-5.38Zm-51-93.68a4,4,0,0,0,4-4V72a4,4,0,0,0-8,0v43.63A4,4,0,0,0,160,119.63Zm40,44a4,4,0,0,0,4-4V32a4,4,0,0,0-8,0V159.63A4,4,0,0,0,200,163.63Z" />
        </G>
      </Svg>
    );
  }

