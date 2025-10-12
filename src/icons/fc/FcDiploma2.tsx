

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcDiploma2 = (props: IconProps) => {

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
          <Path  fill="#FF8A65" d="M24,26c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5S26.8,26,24,26z M24,34c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3 S25.7,34,24,34z" />
          <Path  fill="#FF8A65" d="M8,3v42h32V3H8z M38,40c-1.7,0-3,1.3-3,3H13c0-1.7-1.3-3-3-3V8c1.7,0,3-1.3,3-3h22c0,1.7,1.3,3,3,3V40z" />
        </G>
      </Svg>
    );
  }

