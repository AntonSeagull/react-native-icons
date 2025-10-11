

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoPieChartOutline = (props: IconProps) => {

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
          <Path d="M256.05,80.65Q263.94,80,272,80c106,0,192,86,192,192S378,464,272,464A192.09,192.09,0,0,1,89.12,330.65" />
          <Path d="M256,48C141.12,48,48,141.12,48,256a207.29,207.29,0,0,0,18.09,85L256,256Z" />
        </G>
      </Svg>
    );
  }

