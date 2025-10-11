

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoWalkOutline = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M314.21,482.32,257.44,367.58l-44.89-57.39a72.82,72.82,0,0,1-10.13-37.05V144h15.67a40.22,40.22,0,0,1,40.23,40.22V367.58" />
          <Path d="M127.9,293.05V218.53S165.16,144,202.42,144" />
        </G>
      </Svg>
    );
  }

