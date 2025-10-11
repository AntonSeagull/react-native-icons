

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const HiMiniArrowSmallRight = (props: IconProps) => {

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
          <Path  d="M5 10a.75.75 0 0 1 .75-.75h6.638L10.23 7.29a.75.75 0 1 1 1.04-1.08l3.5 3.25a.75.75 0 0 1 0 1.08l-3.5 3.25a.75.75 0 1 1-1.04-1.08l2.158-1.96H5.75A.75.75 0 0 1 5 10Z" fillRule="evenodd" clipRule="evenodd" />
        </G>
      </Svg>
    );
  }

