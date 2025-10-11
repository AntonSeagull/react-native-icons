

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FaCloudsmith = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 332 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M332.5 419.9c0 46.4-37.6 84.1-84 84.1s-84-37.7-84-84.1 37.6-84 84-84 84 37.6 84 84zm-84-243.9c46.4 0 80-37.6 80-84s-33.6-84-80-84-88 37.6-88 84-29.6 76-76 76-84 41.6-84 88 37.6 80 84 80 84-33.6 84-80 33.6-80 80-80z" />
        </G>
      </Svg>
    );
  }

