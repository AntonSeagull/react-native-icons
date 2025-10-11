

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbChartDotsFilled = (props: IconProps) => {

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
          <Path d="M3 2a1 1 0 0 1 1 1v17h17a1 1 0 0 1 .993 .883l.007 .117a1 1 0 0 1 -1 1h-18a1 1 0 0 1 -1 -1v-18a1 1 0 0 1 1 -1z" />
          <Path d="M19 4a3 3 0 1 1 -.651 5.93l-2.002 3.202a3 3 0 1 1 -4.927 .337l-1.378 -1.655a3 3 0 1 1 1.538 -1.282l1.378 1.654a2.994 2.994 0 0 1 1.693 -.115l2.002 -3.203a3 3 0 0 1 2.347 -4.868z" />
        </G>
      </Svg>
    );
  }

