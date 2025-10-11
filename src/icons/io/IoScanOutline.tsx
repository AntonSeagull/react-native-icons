

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoScanOutline = (props: IconProps) => {

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
          <Path  d="M336,448h56a56,56,0,0,0,56-56V336" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Path  d="M448,176V120a56,56,0,0,0-56-56H336" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Path  d="M176,448H120a56,56,0,0,1-56-56V336" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Path  d="M64,176V120a56,56,0,0,1,56-56h56" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
        </G>
      </Svg>
    );
  }

