

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbRouter = (props: IconProps) => {

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
          <Path d="M3 13m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
          <Path d="M17 17l0 .01" />
          <Path d="M13 17l0 .01" />
          <Path d="M15 13l0 -2" />
          <Path d="M11.75 8.75a4 4 0 0 1 6.5 0" />
          <Path d="M8.5 6.5a8 8 0 0 1 13 0" />
        </G>
      </Svg>
    );
  }

