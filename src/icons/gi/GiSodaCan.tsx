

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiSodaCan = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M171 42l-20 48h210l-20-48H171zm-19.45 65.55v296.9h208.9v-296.9h-208.9zM151 422l20 48h170l20-48H151z" />
        </G>
      </Svg>
    );
  }

