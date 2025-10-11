

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiSidebarSimpleThin = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M216,44H40A12,12,0,0,0,28,56V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44ZM36,200V56a4,4,0,0,1,4-4H84V204H40A4,4,0,0,1,36,200Zm184,0a4,4,0,0,1-4,4H92V52H216a4,4,0,0,1,4,4Z" />
        </G>
      </Svg>
    );
  }

