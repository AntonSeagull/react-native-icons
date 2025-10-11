

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCar4wd = (props: IconProps) => {

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
          <Path d="M5 3m0 2a2 2 0 0 1 2 -2h0a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h0a2 2 0 0 1 -2 -2z" />
          <Path d="M5 15m0 2a2 2 0 0 1 2 -2h0a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h0a2 2 0 0 1 -2 -2z" />
          <Path d="M15 3m0 2a2 2 0 0 1 2 -2h0a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h0a2 2 0 0 1 -2 -2z" />
          <Path d="M15 15m0 2a2 2 0 0 1 2 -2h0a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h0a2 2 0 0 1 -2 -2z" />
          <Path d="M9 18h6" />
          <Path d="M9 6h6" />
          <Path d="M12 6.5v-.5v12" />
        </G>
      </Svg>
    );
  }

