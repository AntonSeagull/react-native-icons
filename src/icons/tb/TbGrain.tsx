

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbGrain = (props: IconProps) => {

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
          <Path d="M4.5 9.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path d="M9.5 4.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path d="M9.5 14.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path d="M4.5 19.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path d="M14.5 9.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path d="M19.5 4.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path d="M14.5 19.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path d="M19.5 14.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        </G>
      </Svg>
    );
  }

