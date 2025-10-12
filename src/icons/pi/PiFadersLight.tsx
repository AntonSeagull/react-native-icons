

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiFadersLight = (props: IconProps) => {

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
          <Path  d="M134,120v96a6,6,0,0,1-12,0V120a6,6,0,0,1,12,0Zm66,74a6,6,0,0,0-6,6v16a6,6,0,0,0,12,0V200A6,6,0,0,0,200,194Zm24-32H206V40a6,6,0,0,0-12,0V162H176a6,6,0,0,0,0,12h48a6,6,0,0,0,0-12ZM56,162a6,6,0,0,0-6,6v48a6,6,0,0,0,12,0V168A6,6,0,0,0,56,162Zm24-32H62V40a6,6,0,0,0-12,0v90H32a6,6,0,0,0,0,12H80a6,6,0,0,0,0-12Zm72-48H134V40a6,6,0,0,0-12,0V82H104a6,6,0,0,0,0,12h48a6,6,0,0,0,0-12Z" />
        </G>
      </Svg>
    );
  }

