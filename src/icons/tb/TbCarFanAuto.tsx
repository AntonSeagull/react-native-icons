

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCarFanAuto = (props: IconProps) => {

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
          <Path  d="M12 12v-9l4.912 1.914a1.7 1.7 0 0 1 .428 2.925z" />
          <Path  d="M14.044 14.624l-2.044 -2.624h4" />
          <Path  d="M12 12h-9l1.914 -4.912a1.7 1.7 0 0 1 2.925 -.428z" />
          <Path  d="M12 12v9l-4.912 -1.914a1.7 1.7 0 0 1 -.428 -2.925z" />
          <Path  d="M17 21v-4a2 2 0 1 1 4 0v4" />
          <Path  d="M17 19h4" />
        </G>
      </Svg>
    );
  }

