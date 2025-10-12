

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcCamcorder = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 24, 24)`}
      >
        <G fill={color} stroke={color}>
          <Circle  fill="#455A64" cx="15" cy="15" r="7" />
          <Circle  fill="#42A5F5" cx="15" cy="15" r="5.2" />
          <Circle  fill="#455A64" cx="15" cy="35" r="3" />
          <Circle  fill="#F44336" cx="15" cy="35" r="2" />
          <Path  fill="#607D8B" d="M20,42H10c-2.2,0-4-1.8-4-4V15c0-5,4-9,9-9h0c5,0,9,4,9,9v23C24,40.2,22.2,42,20,42z" />
          <Path  fill="#90CAF9" d="M18.3,13c-0.8-0.9-2-1.5-3.3-1.5S12.6,12,11.7,13c-0.3,0.4-0.3,0.9,0.1,1.2c0.4,0.3,0.9,0.3,1.2-0.1 c1-1.2,2.9-1.2,3.9,0c0.2,0.2,0.4,0.3,0.7,0.3c0.2,0,0.4-0.1,0.6-0.2C18.6,13.9,18.6,13.3,18.3,13z" />
          <Path  fill="#607D8B" d="M40,31H28c-1.1,0-2-0.9-2-2V19c0-1.1,0.9-2,2-2h12c1.1,0,2,0.9,2,2v10C42,30.1,41.1,31,40,31z" />
          <Circle  cx="37.5" cy="21.5" r="1" />
        </G>
      </Svg>
    );
  }

