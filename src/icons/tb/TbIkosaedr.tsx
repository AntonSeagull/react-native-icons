

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbIkosaedr = (props: IconProps) => {

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
          <Path  d="M21 8.007v7.986a2 2 0 0 1 -1.006 1.735l-7 4.007a2 2 0 0 1 -1.988 0l-7 -4.007a2 2 0 0 1 -1.006 -1.735v-7.986a2 2 0 0 1 1.006 -1.735l7 -4.007a2 2 0 0 1 1.988 0l7 4.007a2 2 0 0 1 1.006 1.735" />
          <Path  d="M3.29 6.97l4.21 2.03" />
          <Path  d="M20.71 6.97l-4.21 2.03" />
          <Path  d="M20.7 17h-17.4" />
          <Path  d="M11.76 2.03l-4.26 6.97l-4.3 7.84" />
          <Path  d="M12.24 2.03q 2.797 4.44 4.26 6.97t 4.3 7.84" />
          <Path  d="M12 17l-4.5 -8h9z" />
          <Path  d="M12 17v5" />
        </G>
      </Svg>
    );
  }

