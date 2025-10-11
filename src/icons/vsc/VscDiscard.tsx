

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscDiscard = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M3.5 2v3.5L4 6h3.5V5H4.979l.941-.941a3.552 3.552 0 1 1 5.023 5.023L5.746 14.28l.72.72 5.198-5.198A4.57 4.57 0 0 0 5.2 3.339l-.7.7V2h-1z" />
        </G>
      </Svg>
    );
  }

