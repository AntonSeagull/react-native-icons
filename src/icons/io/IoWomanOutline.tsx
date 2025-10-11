

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoWomanOutline = (props: IconProps) => {

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
          <Path d="M208,368V472a23.73,23.73,0,0,0,24,24h0a23.73,23.73,0,0,0,24-24" />
          <Path d="M256,368V472a23.73,23.73,0,0,0,24,24h0a23.73,23.73,0,0,0,24-24V368" />
          <Path d="M183,274a23.73,23.73,0,0,1-29.84,16.18h0a23.72,23.72,0,0,1-16.17-29.84l25-84.28A44.85,44.85,0,0,1,205,144H307a44.85,44.85,0,0,1,43,32.08l25,84.28a23.72,23.72,0,0,1-16.17,29.84h0A23.73,23.73,0,0,1,329.05,274" />
        </G>
      </Svg>
    );
  }

