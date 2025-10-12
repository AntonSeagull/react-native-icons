

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandNexo = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M17 3l5 3v12l-5 3l-10 -6v-6l10 6v-6l-5 -3z" />
          <Path  d="M12 6l-5 -3l-5 3v12l5 3l4.7 -3.13" />
        </G>
      </Svg>
    );
  }

