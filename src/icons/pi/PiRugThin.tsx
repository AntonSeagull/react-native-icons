

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiRugThin = (props: IconProps) => {

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
          <Path  d="M200,20a4,4,0,0,0-4,4V44H156V24a4,4,0,0,0-8,0V44H108V24a4,4,0,0,0-8,0V44H60V24a4,4,0,0,0-8,0V232a4,4,0,0,0,8,0V212h40v20a4,4,0,0,0,8,0V212h40v20a4,4,0,0,0,8,0V212h40v20a4,4,0,0,0,8,0V24A4,4,0,0,0,200,20ZM60,52H196V204H60Zm68,120a4,4,0,0,0,3.43-1.94l24-40a4,4,0,0,0,0-4.12l-24-40a4,4,0,0,0-6.86,0l-24,40a4,4,0,0,0,0,4.12l24,40A4,4,0,0,0,128,172Zm0-76.23L147.33,128,128,160.23,108.67,128Z" />
        </G>
      </Svg>
    );
  }

