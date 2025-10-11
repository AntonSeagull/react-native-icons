

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiParrotsecurity = (props: IconProps) => {

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
          <Path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0Zm6.267 2.784L13.03 5.54l8.05-.179-8.05 3.333-2.154 2.688 5.007 9.038-1.536-1.605 1.645 3.456-4.937-5.527-6.268-6.28L2.77 12.11l.7-3.442 4.018-.261.823-4.06Z" />
        </G>
      </Svg>
    );
  }

