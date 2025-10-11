

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiStackMinusThin = (props: IconProps) => {

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
          <Path  d="M236,200a4,4,0,0,1-4,4H184a4,4,0,0,1,0-8h48A4,4,0,0,1,236,200Zm-14-75.46-94,54.83L34,124.54a4,4,0,0,0-4,6.92l96,56a4,4,0,0,0,4,0l96-56a4,4,0,1,0-4-6.92ZM28,80a4,4,0,0,1,2-3.46l96-56a4,4,0,0,1,4,0l96,56a4,4,0,0,1,0,6.92l-96,56a4,4,0,0,1-4,0l-96-56A4,4,0,0,1,28,80Zm11.94,0L128,131.37,216.06,80,128,28.63ZM142,219.21l-14,8.16L34,172.54a4,4,0,0,0-4,6.92l96,56a4,4,0,0,0,4,0l16-9.34a4,4,0,1,0-4-6.91Z" />
        </G>
      </Svg>
    );
  }

