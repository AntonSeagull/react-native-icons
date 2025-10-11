

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiLinksys = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M19.871 0c-1.7024 0-3.082 1.38-3.082 3.082 0 1.7025 1.38 3.08 3.082 3.082 1.7026 0 3.082-1.3795 3.082-3.082 0-1.7024-1.3795-3.082-3.082-3.082ZM1.047.488V24h21.3105v-3.469H5.166V.488Zm7.156 0v17.156h14.154v-3.4707h-10.039V.488Z" />
        </G>
      </Svg>
    );
  }

