

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GoTab = (props: IconProps) => {

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
          <Path d="M22 4.25a.75.75 0 0 0-1.5 0v15a.75.75 0 0 0 1.5 0v-15Zm-9.72 14.28a.75.75 0 1 1-1.06-1.06l4.97-4.97H1.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.75.75 0 0 1 1.06-1.06l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25Z" />
        </G>
      </Svg>
    );
  }

