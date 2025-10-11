

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiSignpostThin = (props: IconProps) => {

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
          <Path  d="M243,109.32,209.36,72a12.06,12.06,0,0,0-8.92-4H132V32a4,4,0,0,0-8,0V68H40A12,12,0,0,0,28,80v64a12,12,0,0,0,12,12h84v68a4,4,0,0,0,8,0V156h68.44a12.06,12.06,0,0,0,8.92-4L243,114.68A4,4,0,0,0,243,109.32Zm-39.56,37.36a4,4,0,0,1-3,1.32H40a4,4,0,0,1-4-4V80a4,4,0,0,1,4-4H200.44a4,4,0,0,1,3,1.32L234.62,112Z" />
        </G>
      </Svg>
    );
  }

