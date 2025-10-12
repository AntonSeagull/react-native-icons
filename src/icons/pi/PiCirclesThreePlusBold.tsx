

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCirclesThreePlusBold = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M78,36a42,42,0,1,0,42,42A42,42,0,0,0,78,36Zm0,60A18,18,0,1,1,96,78,18,18,0,0,1,78,96Zm100,24a42,42,0,1,0-42-42A42,42,0,0,0,178,120Zm0-60a18,18,0,1,1-18,18A18,18,0,0,1,178,60ZM78,136a42,42,0,1,0,42,42A42,42,0,0,0,78,136Zm0,60a18,18,0,1,1,18-18A18,18,0,0,1,78,196Zm142-18a12,12,0,0,1-12,12H190v18a12,12,0,0,1-24,0V190H148a12,12,0,0,1,0-24h18V148a12,12,0,0,1,24,0v18h18A12,12,0,0,1,220,178Z" />
        </G>
      </Svg>
    );
  }

