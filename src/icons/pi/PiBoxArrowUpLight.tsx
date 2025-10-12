

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiBoxArrowUpLight = (props: IconProps) => {

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
          <Path  d="M221.37,69.32l-16-32A6,6,0,0,0,200,34H56a6,6,0,0,0-5.37,3.32l-16,32A6.07,6.07,0,0,0,34,72V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V72A6.07,6.07,0,0,0,221.37,69.32ZM59.71,46H196.29l10,20H49.71ZM208,210H48a2,2,0,0,1-2-2V78H210V208A2,2,0,0,1,208,210Zm-43.76-78.24a6,6,0,1,1-8.48,8.48L134,118.49V184a6,6,0,0,1-12,0V118.49l-21.76,21.75a6,6,0,0,1-8.48-8.48l32-32a6,6,0,0,1,8.48,0Z" />
        </G>
      </Svg>
    );
  }

