

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrRestroom = (props: IconProps) => {

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
          <Path  fill="none" d="M6,11 L18,11 M6,3 L18,3 M12,16 C14.7614237,16 17,13.7614237 17,11 C17,11 7,11 7,11 C7,13.7614237 9.23857625,16 12,16 Z M7,3 L17,3 L17,11 L7,11 L7,3 Z M7,6 L9.5,6 M14.5,15.5 L16,21.5 L8,21.5 L9.5,15.5" strokeLinecap="round" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

