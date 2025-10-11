

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbDeviceLandlinePhone = (props: IconProps) => {

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
          <Path  d="M20 3h-2a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-14a2 2 0 0 0 -2 -2z" />
          <Path  d="M16 4h-11a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h11" />
          <Path  d="M12 8h-6v3h6z" />
          <Path  d="M12 14v.01" />
          <Path  d="M9 14v.01" />
          <Path  d="M6 14v.01" />
          <Path  d="M12 17v.01" />
          <Path  d="M9 17v.01" />
          <Path  d="M6 17v.01" />
        </G>
      </Svg>
    );
  }

