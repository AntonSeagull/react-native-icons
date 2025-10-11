

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbRouteAltRight = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M16 3h5v5" />
          <Path d="M8 3h-5v5" />
          <Path d="M21 3l-7.536 7.536a5 5 0 0 0 -1.464 3.534v6.93" />
          <Path d="M6 6.01v-.01" />
          <Path d="M8 8.02v-.01" />
          <Path d="M10 10v.01" />
        </G>
      </Svg>
    );
  }

