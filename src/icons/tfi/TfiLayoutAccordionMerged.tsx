

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiLayoutAccordionMerged = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M0 0v17h17v-17h-17zM16 1v9h-15v-9h15zM16 11v2h-15v-2h15zM1 16v-2h15v2h-15z" fill="#000000" />
        </G>
      </Svg>
    );
  }

