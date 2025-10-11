

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiMcafee = (props: IconProps) => {

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
          <Path d="M12 4.8233L1.5793 0v19.1767L12 24l10.4207-4.8233V0zm6.172 11.626l-6.143 2.8428-6.1438-2.8429V6.6894l6.1439 2.8418 6.1429-2.8418z" />
        </G>
      </Svg>
    );
  }

