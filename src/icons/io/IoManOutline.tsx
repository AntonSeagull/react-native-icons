

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoManOutline = (props: IconProps) => {

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
          <Path d="M208,208V472a23.73,23.73,0,0,0,24,24h0a23.73,23.73,0,0,0,24-24" />
          <Path d="M256,336V472a23.73,23.73,0,0,0,24,24h0a23.73,23.73,0,0,0,24-24V208" />
          <Path d="M208,192v88a23.72,23.72,0,0,1-24,24h0a23.72,23.72,0,0,1-24-24V192a48,48,0,0,1,48-48h96a48,48,0,0,1,48,48v88a23.72,23.72,0,0,1-24,24h0a23.72,23.72,0,0,1-24-24V192" />
        </G>
      </Svg>
    );
  }

