

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const HiMiniArrowUpRight = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 20 20"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 10, 10)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" fillRule="evenodd" clipRule="evenodd" />
        </G>
      </Svg>
    );
  }

