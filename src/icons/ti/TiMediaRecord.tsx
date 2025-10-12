

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TiMediaRecord = (props: IconProps) => {

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
          <Path  d="M18 12c0-1.657-.672-3.157-1.757-4.243-1.086-1.085-2.586-1.757-4.243-1.757-1.656 0-3.156.672-4.242 1.757-1.086 1.086-1.758 2.586-1.758 4.243 0 1.656.672 3.156 1.758 4.242s2.586 1.758 4.242 1.758c1.657 0 3.157-.672 4.243-1.758 1.085-1.086 1.757-2.586 1.757-4.242z" />
        </G>
      </Svg>
    );
  }

