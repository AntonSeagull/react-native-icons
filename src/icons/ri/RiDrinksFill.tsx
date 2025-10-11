

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiDrinksFill = (props: IconProps) => {

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
          <Path d="M14 2H6.20495C5.6091 2 5.09608 2.42057 4.97923 3.00485L4.1802 7H2V9H4.10875H19.8912H22V7H19.8198L19.0208 3.00485C18.9039 2.42057 18.3909 2 17.795 2H16V0H14V2ZM19.6605 11H4.33952L5.48105 20.8933C5.55383 21.524 6.08789 22 6.72281 22H17.2772C17.9121 22 18.4462 21.524 18.5189 20.8933L19.6605 11Z" />
        </G>
      </Svg>
    );
  }

