

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiFileZipThin = (props: IconProps) => {

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
          <Path  d="M184,148H168a4,4,0,0,0-4,4v56a4,4,0,0,0,8,0V196h12a24,24,0,0,0,0-48Zm0,40H172V156h12a16,16,0,0,1,0,32Zm-52-36v56a4,4,0,0,1-8,0V152a4,4,0,0,1,8,0Zm-40.53,2L62.89,204H88a4,4,0,0,1,0,8H56a4,4,0,0,1-3.47-6l28.58-50H56a4,4,0,0,1,0-8H88a4,4,0,0,1,3.47,6ZM210.83,85.17l-56-56A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40v72a4,4,0,0,0,8,0V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52v20a4,4,0,0,0,8,0V88A4,4,0,0,0,210.83,85.17ZM156,84V41.65L198.34,84Z" />
        </G>
      </Svg>
    );
  }

