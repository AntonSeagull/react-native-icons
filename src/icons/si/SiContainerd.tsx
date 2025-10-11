

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiContainerd = (props: IconProps) => {

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
          <Path d="M3.629 0v24H20.37V0zM17.59 21.208H6.421V10.604h7.812V6.692h3.346v14.516zm-7.823-7.812h4.466v5.02H9.767z" />
        </G>
      </Svg>
    );
  }

