

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiGradientBold = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M20,108A12,12,0,0,1,32,96h76a12,12,0,0,1,0,24H32A12,12,0,0,1,20,108ZM224,96H148a12,12,0,0,0,0,24h76a12,12,0,0,0,0-24ZM68,136H32a12,12,0,0,0,0,24H68a12,12,0,0,0,0-24Zm156,0H188a12,12,0,0,0,0,24h36a12,12,0,0,0,0-24ZM96,148a12,12,0,0,0,12,12h40a12,12,0,0,0,0-24H108A12,12,0,0,0,96,148ZM52,176H32a12,12,0,0,0,0,24H52a12,12,0,0,0,0-24Zm56,0H92a12,12,0,0,0,0,24h16a12,12,0,0,0,0-24Zm56,0H148a12,12,0,0,0,0,24h16a12,12,0,0,0,0-24Zm60,0H204a12,12,0,0,0,0,24h20a12,12,0,0,0,0-24ZM32,80H224a12,12,0,0,0,0-24H32a12,12,0,0,0,0,24Z" />
        </G>
      </Svg>
    );
  }

