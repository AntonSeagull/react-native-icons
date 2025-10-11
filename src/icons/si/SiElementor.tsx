

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiElementor = (props: IconProps) => {

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
          <Path  d="M12 0C5.372 0 0 5.372 0 12c0 6.626 5.372 12 12 12s12-5.372 12-12c0-6.626-5.372-12-12-12ZM9 17H7V7H9Zm8 0H11V15h6Zm0-4H11V11h6Zm0-4H11V7h6Z" />
        </G>
      </Svg>
    );
  }

