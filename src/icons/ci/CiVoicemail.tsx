

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CiVoicemail = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M17.435,7.5a4.5,4.5,0,0,0-2.82,8H9.385a4.494,4.494,0,1,0-2.82,1h10.87a4.5,4.5,0,0,0,0-9ZM3.065,12a3.5,3.5,0,1,1,3.56,3.5h-.06A3.5,3.5,0,0,1,3.065,12Zm14.37,3.5h-.06a3.53,3.53,0,1,1,.06,0Z" />
        </G>
      </Svg>
    );
  }

