

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiMenuFold4Fill = (props: IconProps) => {

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
          <Path  d="M21 4H7V6H21V4ZM21 11H11V13H21V11ZM21 18H7V20H21V18ZM3 17V7L8 11.9996L3 17Z" />
        </G>
      </Svg>
    );
  }

