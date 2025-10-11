

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoManOutline = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M208,208V472a23.73,23.73,0,0,0,24,24h0a23.73,23.73,0,0,0,24-24" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32px" />
          <Path  d="M256,336V472a23.73,23.73,0,0,0,24,24h0a23.73,23.73,0,0,0,24-24V208" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32px" />
          <Path  d="M208,192v88a23.72,23.72,0,0,1-24,24h0a23.72,23.72,0,0,1-24-24V192a48,48,0,0,1,48-48h96a48,48,0,0,1,48,48v88a23.72,23.72,0,0,1-24,24h0a23.72,23.72,0,0,1-24-24V192" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32px" />
        </G>
      </Svg>
    );
  }

