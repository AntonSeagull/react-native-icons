

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiTextTBold = (props: IconProps) => {

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
          <Path  d="M212,56V88a12,12,0,0,1-24,0V68H140V188h20a12,12,0,0,1,0,24H96a12,12,0,0,1,0-24h20V68H68V88a12,12,0,0,1-24,0V56A12,12,0,0,1,56,44H200A12,12,0,0,1,212,56Z" />
        </G>
      </Svg>
    );
  }

