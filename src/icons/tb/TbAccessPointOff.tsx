

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbAccessPointOff = (props: IconProps) => {

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
          <Path  d="M3 3l18 18" />
          <Path  d="M14.828 9.172a4 4 0 0 1 1.172 2.828" />
          <Path  d="M17.657 6.343a8 8 0 0 1 1.635 8.952" />
          <Path  d="M9.168 14.828a4 4 0 0 1 0 -5.656" />
          <Path  d="M6.337 17.657a8 8 0 0 1 0 -11.314" />
        </G>
      </Svg>
    );
  }

