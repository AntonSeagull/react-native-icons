

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoDocumentsSharp = (props: IconProps) => {

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
          <Path  d="M307.94,248,216,154.52V242a6,6,0,0,0,6,6Z" />
          <Path  d="M184,268V144H60a12,12,0,0,0-12,12V484a12,12,0,0,0,12,12H308a12,12,0,0,0,12-12V280H196A12,12,0,0,1,184,268Z" />
          <Path  d="M366,120h85.94L360,26.52V114A6,6,0,0,0,366,120Z" />
          <Path  d="M340,152a12,12,0,0,1-12-12V16H172a12,12,0,0,0-12,12v84h42.12A40.81,40.81,0,0,1,231,124.14l109.16,111a41.11,41.11,0,0,1,11.83,29V400H452a12,12,0,0,0,12-12V152Z" />
        </G>
      </Svg>
    );
  }

